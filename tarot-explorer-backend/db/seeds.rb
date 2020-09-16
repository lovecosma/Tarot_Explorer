# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'net/http'
# require 'open-uri'
# require 'json'
#
# class Api
# URL = ""
# def initialize(url)
# @url = url
# @card_objects = []
# end
#
# def get_response_body
#   @uri = URI.parse(@url)
#   @response = Net::HTTP.get_response(@uri)
#   @response.body
# end
#
# def parse_json
#   @programs = JSON.parse(self.get_response_body)
# return @programs
# end
#
# def create_cards
# @card_hashes = self.parse_json["cards"]
# @card_hashes.each do |card_hash|
#   if card_hash.keys.include?("type")
#     card_hash["card_type"] = card_hash.delete("type")
#   end
# @card_objects << Card.create(card_hash)
# end
# end
#
# end
# Api.new("https://rws-cards-api.herokuapp.com/api/v1/cards").create_cards
