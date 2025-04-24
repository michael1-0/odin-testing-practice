export default function capitalize(string) {
  if (string.length === 0) {
    return string;
  }

 


  if (string.charAt(0).search(/\d+/) !== -1) {
    const index = string.search(/[a-zA-Z]/);

    return (
      string.substring(0, index) +
      string.charAt(index).toUpperCase() +
      string.substring(index + 1)
    );
  }

  if (string.charAt(0) === " ") {
    const index = string.search(/[a-zA-Z]/);

    return (
      string.substring(0, index) +
      string.charAt(index).toUpperCase() +
      string.substring(index + 1)
    );
  }

  
  const upperCaseLetter = string.charAt(0).toUpperCase();
  return upperCaseLetter + string.slice(1);
}
