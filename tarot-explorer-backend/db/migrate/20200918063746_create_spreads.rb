class CreateSpreads < ActiveRecord::Migration[6.0]
  def change
    create_table :spreads do |t|
      t.string :query
      t.string :spread_type

      t.timestamps
    end
  end
end
