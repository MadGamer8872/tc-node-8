export class APIService {
  static getTasks() {
    return new Promise((resolve, reject) => {
      resolve([
        { content: "Code", dueDate: "2022-06-30", priority: 3 },
        { content: "Eat", dueDate: "2022-07-03", priority: 2 },
        { content: "Sleep", dueDate: "2022-03-10", priority: 0 },
      ]);
    });
  }
}
