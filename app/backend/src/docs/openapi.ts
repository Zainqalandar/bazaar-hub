const openapiSpec = {
  openapi: "3.0.3",
  info: {
    title: "Bazaar Hub API",
    version: "1.0.0",
    description: "User and SellerProfile APIs for Bazaar Hub.",
  },
  servers: [{ url: "http://localhost:4000" }],
  paths: {
    "/health": {
      get: {
        tags: ["Health"],
        summary: "Health check",
        responses: {
          200: {
            description: "API is healthy",
            content: {
              "application/json": {
                schema: {
                  type: "object",
                  properties: { status: { type: "string", example: "ok" } },
                },
              },
            },
          },
        },
      },
    },
    "/api/users": {
      get: {
        tags: ["Users"],
        summary: "List users",
        responses: {
          200: {
            description: "List of users",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/User" },
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["Users"],
        summary: "Create a user",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/UserInput" },
            },
          },
        },
        responses: {
          201: {
            description: "User created",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/User" },
              },
            },
          },
          400: {
            description: "Validation error",
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } },
            },
          },
          409: {
            description: "Duplicate user",
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } },
            },
          },
        },
      },
    },
    "/api/seller-profiles": {
      get: {
        tags: ["SellerProfiles"],
        summary: "List seller profiles",
        responses: {
          200: {
            description: "List of seller profiles",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/SellerProfile" },
                },
              },
            },
          },
        },
      },
      post: {
        tags: ["SellerProfiles"],
        summary: "Create a seller profile",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/SellerProfileInput" },
            },
          },
        },
        responses: {
          201: {
            description: "Seller profile created",
            content: {
              "application/json": {
                schema: { $ref: "#/components/schemas/SellerProfile" },
              },
            },
          },
          400: {
            description: "Validation error",
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } },
            },
          },
          409: {
            description: "Duplicate profile or slug",
            content: {
              "application/json": { schema: { $ref: "#/components/schemas/ErrorResponse" } },
            },
          },
        },
      },
    },
  },
  components: {
    schemas: {
      User: {
        type: "object",
        properties: {
          _id: { type: "string", example: "64f7b9e2b2f5b7a2f65a1a11" },
          name: { type: "string", example: "Ahsan Ali" },
          email: { type: "string", example: "ahsan@example.com" },
          role: { type: "string", enum: ["CUSTOMER", "SELLER", "ADMIN"], example: "CUSTOMER" },
          status: { type: "string", enum: ["ACTIVE", "BLOCKED"], example: "ACTIVE" },
          phone: { type: "string", example: "+92-300-1234567" },
          lastLoginAt: { type: "string", format: "date-time", nullable: true },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
      },
      UserInput: {
        type: "object",
        required: ["name", "email", "passwordHash"],
        properties: {
          name: { type: "string", example: "Ahsan Ali" },
          email: { type: "string", example: "ahsan@example.com" },
          passwordHash: { type: "string", example: "$2b$10$hash" },
          role: { type: "string", enum: ["CUSTOMER", "SELLER", "ADMIN"] },
          status: { type: "string", enum: ["ACTIVE", "BLOCKED"] },
          phone: { type: "string", example: "+92-300-1234567" },
          lastLoginAt: { type: "string", format: "date-time" },
        },
      },
      BusinessInfo: {
        type: "object",
        properties: {
          legalName: { type: "string", example: "Ahsan Traders" },
          ntn: { type: "string", example: "1234567-8" },
          address: { type: "string", example: "Lahore, Pakistan" },
        },
      },
      SellerProfile: {
        type: "object",
        properties: {
          _id: { type: "string", example: "64f7b9e2b2f5b7a2f65a1b22" },
          userId: { type: "string", example: "64f7b9e2b2f5b7a2f65a1a11" },
          storeName: { type: "string", example: "Ahsan Store" },
          storeSlug: { type: "string", example: "ahsan-store" },
          businessInfo: { $ref: "#/components/schemas/BusinessInfo" },
          approvalStatus: { type: "string", enum: ["PENDING", "APPROVED", "REJECTED"] },
          appliedAt: { type: "string", format: "date-time" },
          approvedBy: { type: "string", nullable: true },
          approvedAt: { type: "string", format: "date-time", nullable: true },
          rejectionReason: { type: "string", nullable: true },
          createdAt: { type: "string", format: "date-time" },
          updatedAt: { type: "string", format: "date-time" },
        },
      },
      SellerProfileInput: {
        type: "object",
        required: ["userId", "storeName"],
        properties: {
          userId: { type: "string", example: "64f7b9e2b2f5b7a2f65a1a11" },
          storeName: { type: "string", example: "Ahsan Store" },
          storeSlug: { type: "string", example: "ahsan-store" },
          businessInfo: { $ref: "#/components/schemas/BusinessInfo" },
        },
      },
      ErrorResponse: {
        type: "object",
        properties: {
          message: { type: "string", example: "Validation error." },
        },
      },
    },
  },
};

export default openapiSpec;
