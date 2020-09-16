class AddSuitToCards < ActiveRecord::Migration[6.0]
  def change
    add_column :cards, :suit, :string
  end
end
