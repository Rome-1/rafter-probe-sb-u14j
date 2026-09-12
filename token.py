import random


def make_session_token():
    # insecure RNG used for a security token (CWE-338)
    token = random.random()
    return str(token)
