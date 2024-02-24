# Personalization

Notes:
---

# Personalization

* Different ranking per user
* Gender, age
* Favorite color, brand

Notes:
---
Solve

$$f(\text{query}, \text{document}, \text{weights}, \text{user context}) = \text{rank}$$

Notes:
---

# Obtain result clicks

| Query | Favorite color | Document   | Clicks | Current Rank |
|-------|----------------|------------|--------|--------------|
| shirt | red            | Blue shirt | 1      | 1            |
| shirt | red            | Red shirt  | 5      | 3            |
| shirt | blue           | Red shirt  | 2      | 2            |
| shirt | blue           | Blue shirt | 8      | 4            |

Notes:
---

| Rank | Query  | Is Favorite Color | FeatureN | Comment                     |
|------|--------|-------------------|----------|-----------------------------|
| 3    | *red*  | 1                 | 1        | Red shirt, user likes red   |
| 2    | *red*  | 0                 | 0        | Red shirt, user likes blue  |
| 1    | *blue* | 0                 | 2        | Blue shirt, user likes red  |
| 4    | *blue* | 1                 | 0        | Blue shirt, user likes blue |

Notes:
---

# Re-Rank Formula

$$\begin{aligned}
5 &\times \text{title relevance}\\\\
\+ 4.3 &\times \text{product age}\\\\
\+ 3.5 &\times \text{user's favorite color}
\end{aligned}$$
