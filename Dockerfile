FROM node:14.15.4	

RUN mkdir -p /app/	
WORKDIR /app/	

RUN npm install	
RUN npm uninstall node-sass	
RUN npm install node-sass@4.14.1	

EXPOSE 3000	

CMD ["npm", "start"]