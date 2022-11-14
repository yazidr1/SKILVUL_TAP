-- Melihat 3 produk yang paling sering dibeli oleh pelanggan.
select p.name, count(o.product_id) as Amount
from `order` o inner join product p on (p.id = o.product_id)
group by o.id limit 3;