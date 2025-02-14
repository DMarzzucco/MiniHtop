use crossterm::{
    event, execute,
    terminal::{EnterAlternateScreen, LeaveAlternateScreen, disable_raw_mode, enable_raw_mode},
};
use std::{io, time::Duration};
use sysinfo::System;
use tui::{
    Terminal,
    backend::CrosstermBackend,
    layout::{Constraint, Direction, Layout},
    widgets::{Block, Borders, Cell, Row, Table},
};

fn main() -> Result<(), io::Error> {
    enable_raw_mode()?;
    let mut stdout = io::stdout();
    execute!(stdout, EnterAlternateScreen)?;
    let backend = CrosstermBackend::new(stdout);
    let mut terminal = Terminal::new(backend)?;
    let mut sys = System::new_all();

    loop {
        sys.refresh_all();
        terminal.draw(|f| {
            let chunk = Layout::default()
                .direction(Direction::Vertical)
                .constraints([Constraint::Percentage(10), Constraint::Percentage(90)].as_ref())
                .split(f.size());

            let header = Block::default()
                .title("Process Administrator")
                .borders(Borders::ALL);
            f.render_widget(header, chunk[0]);

            let mut rows = vec![];

            for (pid, process) in sys.processes() {
                rows.push(Row::new(vec![
                    Cell::from(format!("{}", pid)),
                    Cell::from(process.name().to_string()),
                ]))
            }
            let table = Table::new(rows)
                .header(Row::new(vec![Cell::from("PID"), Cell::from("Nombre")]))
                .block(Block::default().borders(Borders::ALL))
                .widths(&[Constraint::Percentage(20), Constraint::Percentage(80)]);
            f.render_widget(table, chunk[1]);
        })?;

        if event::poll(Duration::from_millis(500))? {
            if let event::Event::Key(key) = event::read()? {
                if key.code == event::KeyCode::Char('q') {
                    break;
                }
            }
        }
    }
    disable_raw_mode()?;
    execute!(io::stdout(), LeaveAlternateScreen)?;
    Ok(())
}
