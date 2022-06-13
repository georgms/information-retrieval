sudo apt update
sudo apt install -y wget default-jre
SOLR_VERSION=8.11.1
wget http://mirror.klaus-uwe.me/apache/lucene/solr/${SOLR_VERSION}/solr-${SOLR_VERSION}.tgz
tar -zxf solr-${SOLR_VERSION}.tgz
chown -R vagrant:vagrant solr-${SOLR_VERSION}
echo -e "vagrant hard nofile 65000\nvagrant hard nproc 65000" | sudo tee /etc/security/limits.d/solr.conf >/dev/null
sed --in-place '24i\
  <filter>\
    <filter-name>cross-origin</filter-name>\
    <filter-class>org.eclipse.jetty.servlets.CrossOriginFilter</filter-class>\
    <init-param>\
      <param-name>allowedOrigins</param-name>\
      <param-value>*</param-value>\
    </init-param>\
    <init-param>\
      <param-name>allowedMethods</param-name>\
      <param-value>GET,POST,OPTIONS,DELETE,PUT,HEAD</param-value>\
    </init-param>\
    <init-param>\
      <param-name>allowedHeaders</param-name>\
      <param-value>origin, content-type, accept</param-value>\
    </init-param>\
  </filter>\
  \
  <filter-mapping>\
    <filter-name>cross-origin</filter-name>\
    <url-pattern>/*</url-pattern>\
  </filter-mapping>
' "solr-${SOLR_VERSION}/server/solr-webapp/webapp/WEB-INF/web.xml"
