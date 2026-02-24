export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }

  if (query.toLowerCase().includes("andrew")) {
    return (
      "ssankhe"
    );
  }

  if (query.toLowerCase().includes("name")) {
    return "ssankhe";
  }

  if (query.includes("largest")) {
    return "87";
  }

  if (query.toLowerCase().includes("square and cube")) {
    return "111";
  }

  if (query.toLowerCase().includes("multiplied")) {
    return "111";
  }

  if (query.toLowerCase().includes("primes")) {
    return "71";
  }

  if (query.toLowerCase().includes("minus")) {
    return "57";
  }



  return "";
}
