

# Struct atlas::vector2

**template &lt;typename T&gt;**



[**ClassList**](annotated.md) **>** [**atlas**](namespaceatlas.md) **>** [**vector2**](structatlas_1_1vector2.md)



[More...](#detailed-description)


































































## Detailed Description




**Note:**

The reason why we do this is because if we have an arbitrary type of vec2, vec3, vec4. This allows us to still utilize glm::vec3 as our default vec3 types 




**Note:**

The computation would still be of how you can do math can be implemented by the math library of your choice, the only thing you just to is make those changes at compile-time to glm::vec2, glm::vec3, or even glm::vec4. 




**Note:**

Hence why you override these metadata classes for specifically vec2, 3, and 4




**Note:**

By doing this we can let the default we define be utilizing glm's mathematical data types. Then letting users define their own customizable types if they choose to utilize a different mathematical type 





    

------------------------------
The documentation for this class was generated from the following file `TheAtlasEngine/atlas/core/math/types.hpp`

