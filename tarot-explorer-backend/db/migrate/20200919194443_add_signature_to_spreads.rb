class AddSignatureToSpreads < ActiveRecord::Migration[6.0]
  def change
    add_column :spreads, :signature, :string
  end
end
