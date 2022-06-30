import { useState } from "react";

export const TaskForm = ({ onSubmit }) => {
  const [content, setContent] = useState("");
  const [dueDate, setDueDate] = useState(new Date().toLocaleDateString());
  const [priority, setPriority] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit(content, dueDate, priority);

    setContent("");
    setDueDate(new Date().toString());
    setPriority("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="content" className="form-label">
          Task
        </label>
        <input
          type="text"
          name="content"
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="form-control"
        />
      </div>
      <div className="form-group">
        <label htmlFor="dueDate" className="form-label"></label>
        <input
          type="date"
          name="dueDate"
          id="dueDate"
          className="form-control"
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="priority" className="form-label"></label>
        <input
          type="range"
          name="priority"
          id="priority"
          className="form-control"
          value={priority}
          onChange={(e) => setPriority(e.target.value)}
          min={0}
          max={3}
          step={1}
        />
      </div>
      <button className="btn" type="submit">
        Add
      </button>
    </form>
  );
};
