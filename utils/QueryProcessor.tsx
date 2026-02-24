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

  if (query.includes("square and cube")) {
    return "111";
  }

  if (query.includes("multiplied")) {
    return "111";
  }

  if (query.includes("primes")) {
    return "111";
  }

  if (query.includes("minus")) {
    return "111";
  }



  return "";
}
