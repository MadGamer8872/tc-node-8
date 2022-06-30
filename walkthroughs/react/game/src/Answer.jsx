function Answer({ isShown, value, isCorrect, className }) {
  const charsToBlanks = (str) => {
    let result = "";

    for (let char of str) {
      if (char != " ") {
        result += "_";
      } else {
        result += char;
      }
    }

    return result;
  };

  let answer = isShown ? value : charsToBlanks(value);

  return (
    <p
      className={`answer ${
        isShown && `answer-${isCorrect ? "pass" : "fail"}`
      } ${className}`}
    >
      {answer}
    </p>
  );
}

export default Answer;
