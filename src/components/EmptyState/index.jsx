import "./empty-state.style.css";

export function EmptyState() {
  return (
    <section className="empty-state">
      <p>Ainda não tem tarefas cadastradas, adicione para começar!</p>
      <img src="./noun-empty-1.svg" alt="ico-empty-state" />;
    </section>
  );
}
