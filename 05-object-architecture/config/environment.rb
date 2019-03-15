require 'pry'

require_relative '../lib/pet.rb'
require_relative '../lib/pescatarianable.rb'
require_relative '../lib/pettable.rb'
Dir[File.join(File.dirname(__FILE__), "../lib", "*.rb")].each {|f| require f}
