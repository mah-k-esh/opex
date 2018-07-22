module.exports = {
    "DB_URL": "postgres://postgres:root@localhost:5432/opex",
    "INVENTORY_FILTER_BY_WEEKS_POSTGRESQL": "select date_part('week',\"Date\"), SUM(\"On Hand Value\") from \"Inventory\" group by date_part('week',\"Date\") order by date_part('week',\"Date\")",
    "INVENTORY_FILTER_BY_DAYS_POSTGRESQL": "select to_char(\"Date\", 'DD Mon YYYY') as \"date\", SUM(\"On Hand Value\") from \"Inventory\" group by \"Date\" order by \"Date\"",
    "INVENTORY_META_DATE_DISTINCT_POSTGRESQL": "select to_char(\"Date\", 'DD Mon YYYY') as \"date\" from \"Inventory\" group by \"Date\" order by \"Date\""
}