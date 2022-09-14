import useFieldRichText from "../hooks/use-field-rich-text";
import useFieldText from "../hooks/use-field-text";
import { addNote } from "../utils/api";

export function AddNote() {
  const [title, onChangeTitle] = useFieldText();
  const [body, onChangeBody] = useFieldRichText();

  const onSubmit = async (event) => {
    event.preventDefault();
    await addNote({ title, body });
    onChangeTitle("");
    onChangeBody("");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="masukkan judul catatan..."
        value={title}
        onChange={onChangeTitle}
        required
      />
      <div
        data-placeholder="masukkan isi catatan..."
        contentEditable
        onInput={onChangeBody}
      />
      <input type="submit" value="tambah catatan" />
    </form>
  );
}
