FROM nodesource/trusty:5.3.0

# cache package.json and node_modules to speed up builds
ADD package.json package.json
RUN npm install

ADD . .
CMD ["npm","start"]
