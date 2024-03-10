function createRegex({
  upperCase = false,
  lowerCase = false,
  caseSensitive = false,
  includes,
  excludes,
}) {
  // * Control: overlash control in uppercase and lowercase settings
  if (upperCase && lowerCase) {
    console.error(
      "Error: 'uppercase' and 'Lowercase' settings contradict each other."
    );
    return null;
  }

  // * Control: Cassage control in Cassesense, LowerCase and Uppercase settings
  if (caseSensitive && (lowerCase || upperCase)) {
    console.error(
      "Error: 'Cassesensitive', 'Lowercase' or 'uppercase' settings contradict each other."
    );
    return null;
  }

  // * Control: Construction in Includes and Excludes series
  if (includes && excludes) {
    const intersection = includes.filter((value) => excludes.includes(value));
    if (intersection.length > 0) {
      console.error(
        "Error: There are coincidences in the series 'Includes' and 'Excludes'."
      );
      return null;
    }
  }

  let regex = "";

  // * CAPITAL LETTER Sensitivity Control
  if (upperCase) regex += "[A-Z]";

  // * Lowercase sensitivity control
  if (lowerCase) regex += "[a-z]";

  // * Items to contain
  if (includes && includes.length) regex += `(?:${includes.join("|")})`;

  // * Items that should not contain
  if (excludes && excludes.length) regex += `(?!${excludes.join("|")})`;

  regex = "/" + regex + "/";

  // * LARGE LAND LETTER Sensitivity Control
  if (caseSensitive) regex += "i";

  return regex;
}
export default createRegex;
