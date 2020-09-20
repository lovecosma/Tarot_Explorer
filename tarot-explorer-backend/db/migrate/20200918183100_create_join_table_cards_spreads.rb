class CreateJoinTableCardsSpreads < ActiveRecord::Migration[6.0]
  def change
    create_join_table :cards, :spreads do |t|
      # t.index [:card_id, :spread_id]
      # t.index [:spread_id, :card_id]
    end
  end
end
