class Calculator

  def add(a, b)
    a.send("+", b)
  end

  def factorial(n)
    if n == 0
      1
    else
      (1..n).to_a.inject do |total, n|
        total * n
      end
    end
    # if n == 0
    #     1
    # else
    #     n * factorial(n-1)
    # end
  end

end
