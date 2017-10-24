import pytest
from pflags import match_flags

def test():
    with open('cpu.h', 'r') as f:
        initial_flags = sum(1 for line in f)

    with open('result.js') as f:
        result_flags = sum(1 for line in f)

    assert initial_flags == result_flags - 3
