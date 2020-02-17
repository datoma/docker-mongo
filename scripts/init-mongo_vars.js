const {
  MONGODB_USER_NAME,
  MONGODB_USER_PWD,
  MONGODB_SAMPLE_DB
} = process.env;

db.createUser(
        {
            user: ${MONGODB_USER_NAME},
            pwd: ${MONGODB_USER_PWD},
            roles: [
                {
                    role: "readWrite",
                    db: ${MONGODB_SAMPLE_DB}
                }
            ]
        }
);
