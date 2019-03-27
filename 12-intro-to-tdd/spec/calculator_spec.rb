require_relative './spec_helper'
require_relative '../calculator'

describe Calculator do

  describe '#add' do

    it 'returns the sum of two numbers!!!!' do
      # - Setup
      calc = Calculator.new
      # - Execute/trigger
      sum = calc.add(3, 4)
      # - Expectation
      expect(sum).to eq(7)
      # - Teardown
    end

    it 'handles negative numbers' do
      calc = Calculator.new

      # trigger/execution and expectation phase together in one step
      expect(calc.add(-1, 10)).to eq(9)
    end

  end

  describe '#factorial' do

    # 7!
    # => 7 * 6 * 5 * 4 * 3 * 2 * 1 * 0
    # 0! == 1
    it 'returns 1 when given 0' do
      calc = Calculator.new

      result = calc.factorial(0)

      expect(result).to eq(1)
    end

    it 'returns the product of all numbers from n to 0' do
      calc = Calculator.new

      result = calc.factorial(5)

      expect(result).to eq(120)
    end
  end
end
