CREATE TABLE IF NOT EXISTS measurement_counts (
 day TEXT NOT NULL, page TEXT NOT NULL, locale TEXT NOT NULL,
 event TEXT NOT NULL, channel TEXT NOT NULL, source TEXT NOT NULL,
 medium TEXT NOT NULL, basis TEXT NOT NULL, campaign TEXT NOT NULL,
 error TEXT NOT NULL, n INTEGER NOT NULL,
 PRIMARY KEY(day,page,locale,event,channel,source,medium,basis,campaign,error)
);
CREATE TABLE IF NOT EXISTS measurement_rate (
 subject TEXT NOT NULL, bucket INTEGER NOT NULL, n INTEGER NOT NULL,
 PRIMARY KEY(subject,bucket)
);
