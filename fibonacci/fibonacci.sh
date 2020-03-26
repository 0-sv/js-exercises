#!/bin/bash

function fibo() {
    if [ $1 -eq 0 ]
    then
        echo 0
    elif [ $1 -eq 1 ]
    then
        echo 1
    elif [ $1 -gt 1 ]
    then
        lhs=$(fibo $(( $1 - 1)))
        rhs=$(fibo $(( $1 - 2)))
        echo $(( $lhs + $rhs ))
    fi
}

fibo 8
echo $?