---
to: "<%= have_graphql ? `${abs_path/schema.graphql}` : null %>"
---
query <%= component_name %> {}
