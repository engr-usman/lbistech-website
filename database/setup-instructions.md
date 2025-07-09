# PostgreSQL Database Setup on Ubuntu Server

## Step 1: Install PostgreSQL

```bash
# Update system packages
sudo apt update

# Install PostgreSQL and additional contrib package
sudo apt install postgresql postgresql-contrib

# Start and enable PostgreSQL service
sudo systemctl start postgresql
sudo systemctl enable postgresql

# Check PostgreSQL status
sudo systemctl status postgresql
```

## Step 2: Configure PostgreSQL

```bash
# Switch to postgres user
sudo -i -u postgres

# Access PostgreSQL prompt
psql

# Create database and user
CREATE DATABASE lbistech_website;
CREATE USER lbistech_user WITH ENCRYPTED PASSWORD 'your_secure_password_here';
GRANT ALL PRIVILEGES ON DATABASE lbistech_website TO lbistech_user;

# Exit PostgreSQL
\q

# Exit postgres user
exit
```

## Step 3: Configure PostgreSQL for Remote Access (if needed)

```bash
# Edit PostgreSQL configuration
sudo nano /etc/postgresql/14/main/postgresql.conf

# Find and uncomment/modify this line:
listen_addresses = '*'

# Edit pg_hba.conf for authentication
sudo nano /etc/postgresql/14/main/pg_hba.conf

# Add this line for your application server IP:
host    lbistech_website    lbistech_user    your_server_ip/32    md5

# Restart PostgreSQL
sudo systemctl restart postgresql
```

## Step 4: Import Database Schema

```bash
# Connect to your database
psql -h localhost -U lbistech_user -d lbistech_website

# Or import from file
psql -h localhost -U lbistech_user -d lbistech_website -f schema.sql
```

## Step 5: Test Database Connection

```bash
# Test connection
psql -h localhost -U lbistech_user -d lbistech_website -c "SELECT * FROM contact_submissions;"
```

## Step 6: Firewall Configuration (if needed)

```bash
# Allow PostgreSQL port
sudo ufw allow 5432

# Or allow from specific IP
sudo ufw allow from your_app_server_ip to any port 5432
```

## Security Best Practices

1. **Use strong passwords** for database users
2. **Limit network access** to specific IPs only
3. **Enable SSL** for database connections
4. **Regular backups** using pg_dump
5. **Monitor database logs** for suspicious activity

## Backup Commands

```bash
# Create backup
pg_dump -h localhost -U lbistech_user lbistech_website > backup_$(date +%Y%m%d).sql

# Restore backup
psql -h localhost -U lbistech_user -d lbistech_website < backup_20250108.sql
```