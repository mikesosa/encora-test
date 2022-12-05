function getDifference(a: string[], b: string[]) {
  return a.filter((element) => {
    return !b.includes(element);
  });
}

function replaceVarsInString(text: string, vars: Record<string, string>) {
  let textVars: string[] = text.match(/{{\w+}}/g) ?? [];
  textVars = textVars.map((v) => v.replace(/{{|}}/g, ""));
  const keys = Object.keys(vars);

  const difference = getDifference(keys, textVars);

  if (difference.length > 0) {
    throw new Error(
      `The following variables are not in the text: ${difference.join(", ")}`
    );
  }

  if (!textVars) {
    return text;
  }

  return Object.entries(vars).reduce((acc, [key, value]) => {
    return acc.replace(new RegExp(`{{${key}}}`, "g"), value);
  }, text);
}

const res = replaceVarsInString("Hello {{name}}, your age is {{age}}", {
  name: "John",
  age: "22",
});

console.log(res);
