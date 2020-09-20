class Spread < ApplicationRecord
 has_and_belongs_to_many :cards
 accepts_nested_attributes_for :cards
 validates_presence_of :query
 validates :query, length: { maximum: 50, too_long: "Try making a shorter query. %{count} characters is the maximum allowed"}
 validates :query, length: {minimum: 3, too_short: "Try making a longer query. %{count} characters is the minimum allowed"}
 validates_presence_of :spread_type
 validates_associated :cards
end
