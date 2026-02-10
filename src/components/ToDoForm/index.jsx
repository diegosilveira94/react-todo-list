import { Button } from "../Button";
import { TextInput } from "../TextInput";
import "./todo-form.style.css";

export function TodoForm({ onSubmit }) {
  return (
    <form action={onSubmit} className="todo-form">
      <TextInput
        placeholder="Digite o item que deseja adicionar"
        required
        name={"description"}
      />
      <Button>Salvar Item</Button>
    </form>
  );
}
