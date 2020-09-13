'use strict'

function power(val, pow) {
    if (pow == 1) {
        return val
    }  else {
        val = val * 2
        return power(val, pow - 1)
    }
}