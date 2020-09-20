class Spread < ApplicationRecord
  has_and_belongs_to_many :cards
   accepts_nested_attributes_for :cards
end
