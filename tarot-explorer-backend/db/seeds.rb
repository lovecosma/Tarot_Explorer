# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'net/http'
require 'open-uri'
require 'json'

class Api
URL = ""
def initialize(url)
@url = url
@card_objects = []
end

def get_response_body
  @uri = URI.parse(@url)
  @response = Net::HTTP.get_response(@uri)
  @response.body
end

def parse_json
  @programs = JSON.parse(self.get_response_body)
return @programs
end

def create_cards
@card_hashes = self.parse_json["cards"]
@card_hashes.each do |card_hash|
  if card_hash.keys.include?("type")
    card_hash["card_type"] = card_hash.delete("type")
  end
@card_objects << Card.create(card_hash)
end
end

end
Api.new("https://rws-cards-api.herokuapp.com/api/v1/cards").create_cards
Card.all[0].update(image_url: "https://i.ibb.co/F8S1fMw/rwmagician.jpg")
Card.all[1].update(image_url: "https://i.ibb.co/cvbXtgV/rwhighpriestess.jpg")
Card.all[2].update(image_url: "https://i.ibb.co/prCnjVJ/rwempress.jpg")
Card.all[3].update(image_url: "https://i.ibb.co/rf0rn36/rwemperor.jpg")
Card.all[4].update(image_url: "https://i.ibb.co/P1J2BjC/rwhierophant.jpg")
Card.all[5].update(image_url: "https://i.ibb.co/1dKmswC/rwlovers.jpg")
Card.all[6].update(image_url: "https://i.ibb.co/RBWZwD8/rwchariot.jpg")
Card.all[7].update(image_url: "https://i.ibb.co/wB3gQkB/rwstrength.jpg")
Card.all[8].update(image_url: "https://i.ibb.co/XSKjL0s/rwhermit.jpg")
Card.all[9].update(image_url: "https://i.ibb.co/5K1P6tw/rwwheelfortune.jpg")
Card.all[10].update(image_url: "https://i.ibb.co/DYdPghJ/rwjustice.jpg")
Card.all[11].update(image_url: "https://i.ibb.co/1RJq8PN/rwhangedman.jpg")
Card.all[12].update(image_url: "https://i.ibb.co/HVFLNqW/rwdeath.jpg")
Card.all[13].update(image_url: "https://i.ibb.co/99dMJv4/rwtemperance.jpg")
Card.all[14].update(image_url: "https://i.ibb.co/DR0b1kj/rwdevil.jpg")
Card.all[15].update(image_url: "https://i.ibb.co/K518JPy/rwtower.jpg")
Card.all[16].update(image_url: "https://i.ibb.co/TYt1ckh/rwstar.jpg")
Card.all[17].update(image_url: "https://i.ibb.co/yS01CB7/rwmoon.jpg")
Card.all[18].update(image_url: "https://i.ibb.co/3yF9bP5/rwsun.jpg")
Card.all[19].update(image_url: "https://i.ibb.co/C6461LX/rwjudgement.jpg")
Card.all[20].update(image_url: "https://i.ibb.co/K02Wn2c/rwfool.jpg")
Card.all[21].update(image_url: "https://i.ibb.co/ZM82XmN/rwworld.jpg")
Card.all[22].update(image_url: "https://i.ibb.co/yq3xYPN/rwpagewands.jpg")
Card.all[23].update(image_url: "https://i.ibb.co/QN0GYjK/rwknightwands.jpg")
Card.all[24].update(image_url: "https://i.ibb.co/W6frbNc/rwqueenwands.jpg")
Card.all[25].update(image_url: "https://i.ibb.co/YjSFJty/rwkingwands.jpg")
Card.all[26].update(image_url: "https://i.ibb.co/3myXW7g/rwacewands.jpg")
Card.all[27].update(image_url: "https://i.ibb.co/YQRVp39/rw02wands.jpg")
Card.all[28].update(image_url: "https://i.ibb.co/jrqnnmj/rw03wands.jpg")
Card.all[29].update(image_url: "https://i.ibb.co/55QqC23/rw04wands.jpg")
Card.all[30].update(image_url: "https://i.ibb.co/gT30Ckh/rw05wands.jpg")
Card.all[31].update(image_url: "https://i.ibb.co/kyPr3vP/rw06wands.jpg")
Card.all[32].update(image_url: "https://i.ibb.co/wybqtsn/rw07wands.jpg")
Card.all[33].update(image_url: "https://i.ibb.co/Bj6sf9T/rw08wands.jpg")
Card.all[34].update(image_url: "https://i.ibb.co/Nx01TPD/rw09wands.jpg")
Card.all[35].update(image_url: "https://i.ibb.co/sJ2Cfjj/rw10wands.jpg")
Card.all[36].update(image_url: "https://i.ibb.co/JKsrHdw/rwpagecups.jpg")
Card.all[37].update(image_url: "https://i.ibb.co/3CLWpkf/rwknightcups.jpg")
Card.all[38].update(image_url: "https://i.ibb.co/LdQyhN6/rwqueencups.jpg")
Card.all[39].update(image_url: "https://i.ibb.co/Cn68j27/rwkingcups.jpg")
Card.all[40].update(image_url: "https://i.ibb.co/NpRbjRY/rwacecups.jpg")
Card.all[41].update(image_url: "https://i.ibb.co/xsGmtG6/rw02cups.jpg")
Card.all[42].update(image_url: "https://i.ibb.co/xftG9v6/rw03cups.jpg")
Card.all[43].update(image_url: "https://i.ibb.co/R7Y7XFH/rw04cups.jpg")
Card.all[44].update(image_url: "https://i.ibb.co/0YDz27C/rw05cups.jpg")
Card.all[45].update(image_url: "https://i.ibb.co/VVLr7cw/rw06cups.jpg")
Card.all[46].update(image_url: "https://i.ibb.co/yd0JjNK/rw07cups.jpg")
Card.all[47].update(image_url: "https://i.ibb.co/q0ZjsKs/rw08cups.jpg")
Card.all[48].update(image_url: "https://i.ibb.co/9cG8hX3/rw09cups.jpg")
Card.all[49].update(image_url: "https://i.ibb.co/vd03Bfm/rw10cups.jpg")
Card.all[50].update(image_url: "https://i.ibb.co/x1hm2GP/rwpagepentacles.jpg")
Card.all[51].update(image_url: "https://i.ibb.co/ZV73Zmr/rwknightpentacles.jpg")
Card.all[52].update(image_url: "https://i.ibb.co/cCHVLSf/rwqueenpentacles.jpg")
Card.all[53].update(image_url: "https://i.ibb.co/ZYLRQH2/rwkingpentacles.jpg")
Card.all[54].update(image_url: "https://i.ibb.co/7vWYRCK/rwacepentacles.jpg")
Card.all[55].update(image_url: "https://i.ibb.co/1M93P3x/rw02pentacles.jpg")
Card.all[56].update(image_url: "https://i.ibb.co/CMHQvkN/rw03pentacles.jpg")
Card.all[57].update(image_url: "https://i.ibb.co/pnFfvr9/rw04pentacles.jpg")
Card.all[58].update(image_url: "https://i.ibb.co/vkTv4ZB/rw05pentacles.jpg")
Card.all[59].update(image_url: "https://i.ibb.co/dWZHQfL/rw06pentacles.jpg")
Card.all[60].update(image_url: "https://i.ibb.co/TRGnNnJ/rw07pentacles.jpg")
Card.all[61].update(image_url: "https://i.ibb.co/NYs18YY/rw08pentacles.jpg")
Card.all[62].update(image_url: "https://i.ibb.co/Sn0gvQr/rw09pentacles.jpg")
Card.all[63].update(image_url: "https://i.ibb.co/nBL0Mc5/rw10pentacles.jpg")
Card.all[64].update(image_url: "https://i.ibb.co/RCDQfqN/rwpageswords.jpg")
Card.all[65].update(image_url: "https://i.ibb.co/ydb5b7Y/rwknightswords.jpg")
Card.all[66].update(image_url: "https://i.ibb.co/MkbRXr8/rwqueenswords.jpg")
Card.all[67].update(image_url: "https://i.ibb.co/8mWYQwK/rwkingswords.jpg")
Card.all[68].update(image_url: "https://i.ibb.co/PxXvFM3/rwaceswords.jpg")
Card.all[69].update(image_url: "https://i.ibb.co/HqtSXg5/rw02swords.jpg")
Card.all[70].update(image_url: "https://i.ibb.co/hY4j1fZ/rw03swords.jpg")
Card.all[71].update(image_url: "https://i.ibb.co/bWgfP3j/rw04swords.jpg")
Card.all[72].update(image_url: "https://i.ibb.co/vBr1SWX/rw05swords.jpg")
Card.all[73].update(image_url: "https://i.ibb.co/G5FWSkL/rw06swords.jpg")
Card.all[74].update(image_url: "https://i.ibb.co/2tKNghC/rw07swords.jpg")
Card.all[75].update(image_url: "https://i.ibb.co/c2nxZP0/rw08swords.jpg")
Card.all[76].update(image_url: "https://i.ibb.co/wdNNSqp/rw09swords.jpg")
Card.all[77].update(image_url:  "https://i.ibb.co/B2Jbn7t/rw10swords.jpg")
