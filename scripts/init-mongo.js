db.createUser(
        {
            user: "user",
            pwd: "samplePw0",
            roles: [
                {
                    role: "readWrite",
                    db: "sampleDb"
                }
            ]
        }
);
