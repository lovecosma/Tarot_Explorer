class Card < ApplicationRecord
  scope :major, -> { where(card_type: 'major')}
  scope :minor, -> { where(card_type: 'minor')}
  scope :pentacles, -> { where(suit: 'pentacles')}
  scope :swords, -> { where(suit: 'swords')}
  scope :cups, -> { where(suit: 'cups')}
  scope :wands, -> {where(suit: 'wands')}
  scope :random, -> {order('RANDOM()').limit(1)}
end
