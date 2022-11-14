-- Melihat Kategori barang yang paling banyak barangnya.

select p.name "Barang", count(o.product_id) "Amount"
from `order` o inner join product p on (o.product_id = p.id)
group by o.product_id limit 3;