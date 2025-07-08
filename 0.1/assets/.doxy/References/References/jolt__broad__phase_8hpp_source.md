

# File jolt\_broad\_phase.hpp

[**File List**](files.md) **>** [**atlas**](dir_1e6ffef027cfcf7ded3287660b505c9f.md) **>** [**physics**](dir_40e4880a491f87475db52b6f14fdb765.md) **>** [**physics\_3d**](dir_ab5034a21b7aebf79f76e5e8638ac885.md) **>** [**jolt**](dir_3d876be8cd66de39c1e103aa97223d9b.md) **>** [**interface**](dir_6170caab3d86040ff713c96f30038a01.md) **>** [**jolt\_broad\_phase.hpp**](jolt__broad__phase_8hpp.md)

[Go to the documentation of this file](jolt__broad__phase_8hpp.md)


```C++
#pragma once

#include <physics/jolt-cpp/jolt-imports.hpp>

namespace atlas::physics {

    // This should eventually have a pipeline for the user to create masks.
    enum class ObjectLayer : std::uint8_t {
        NonMoving = 0,
        Moving = 1,
        NumLayers
    };

    enum class BroadPhaseLayers : std::uint8_t {
        NonMoving = 0,
        Moving = 1,
        NumLayers
    };

    class broad_phase_layer_interface final
      : public JPH::BroadPhaseLayerInterface {
    public:
        broad_phase_layer_interface() = default;

        [[nodiscard]] uint32_t GetNumBroadPhaseLayers() const override {
            return (uint32_t)(BroadPhaseLayers::NumLayers);
        }

        [[nodiscard]] JPH::BroadPhaseLayer GetBroadPhaseLayer(
          JPH::ObjectLayer p_in_layer) const override {
            JPH_ASSERT(p_in_layer < (JPH::ObjectLayer)ObjectLayer::NumLayers);
            return m_object_to_broadphase[p_in_layer];
        }

#if defined(JPH_EXTERNAL_PROFILE) || defined(JPH_PROFILE_ENABLED)
        [[nodiscard]] const char* GetBroadPhaseLayerName(
          JPH::BroadPhaseLayer p_in_layer) const override {
            switch (p_in_layer.GetValue()) {
                case (JPH::BroadPhaseLayer::Type)(BroadPhaseLayers::NonMoving):
                    return "NonMoving";
                case (JPH::BroadPhaseLayer::Type)(BroadPhaseLayers::Moving):
                    return "Moving";
                default:
                    JPH_ASSERT(false);
                    return "Unknown";
            }
        }
#endif

    private:
        // The list of organizational layers
        std::vector<JPH::BroadPhaseLayer> m_object_to_broadphase{
            JPH::BroadPhaseLayer((uint8_t)(BroadPhaseLayers::NonMoving)),
            JPH::BroadPhaseLayer((uint8_t)(BroadPhaseLayers::Moving))

        };
    };

    class object_vs_broadphase_layer final
      : public JPH::ObjectVsBroadPhaseLayerFilter {
    public:
        [[nodiscard]] bool ShouldCollide(
          JPH::ObjectLayer p_in_layer1,
          JPH::BroadPhaseLayer p_in_layer2) const override {
            switch (p_in_layer1) {
                case (int)(ObjectLayer::NonMoving):
                    return p_in_layer2 ==
                           JPH::BroadPhaseLayer((JPH::BroadPhaseLayer::Type)(
                             BroadPhaseLayers::Moving));
                case (int)ObjectLayer::Moving:
                    return true;
                default:
                    JPH_ASSERT(false);
                    return false;
            }
        }
    };

    class object_layer_pair_filter final : public JPH::ObjectLayerPairFilter {
    public:
        [[nodiscard]] bool ShouldCollide(
          JPH::ObjectLayer p_in_object1,
          JPH::ObjectLayer p_in_object2) const override {
            switch (p_in_object1) {
                case (int)(ObjectLayer::NonMoving):
                    return p_in_object2 == (int)(ObjectLayer::Moving);
                case (int)(ObjectLayer::Moving):
                    return true;
                default:
                    JPH_ASSERT(false);
                    return false;
            }
        }
    };

}
```


