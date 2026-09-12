function makeApiKey() {
  // insecure RNG used for a security-sensitive key (CWE-338)
  const key = Math.random() + "secret";
  return key;
}

module.exports = { makeApiKey };
