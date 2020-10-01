class AddColumnsToAnnotations < ActiveRecord::Migration[5.2]
  def change
    add_column :annotations, :line_start, :integer
    add_column :annotations, :line_end, :integer
    add_column :annotations, :start_offset, :integer
    add_column :annotations, :end_offset, :integer
  end
end
