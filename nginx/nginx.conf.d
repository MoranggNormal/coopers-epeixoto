upstream client {
    hash $request_uri consistent;
    server client:3000;
}

server {

    listen 80;
    server_name client;

    location / {
        proxy_pass http://client;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header Host $host;
        add_header X-Cache-Status $upstream_cache_status always;
        proxy_redirect off;
    }

    location /docs {
        alias /usr/share/nginx/html;
        try_files $uri $uri/ =404;
    }
}