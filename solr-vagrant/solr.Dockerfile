FROM solr:8.11.1-slim

USER root
RUN sed --in-place '24i\
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
  </filter-mapping>\
' "server/solr-webapp/webapp/WEB-INF/web.xml"
USER solr
