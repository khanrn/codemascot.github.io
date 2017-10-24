---
layout: page
title: My Blog
---

<div class="posts">
{% for post in site.posts %}
<div class="post">
<h1 class="post-title">
<a href="{{ post.url }}">
{{ post.title }}
</a>
</h1>
<span class="post-date">{{ post.date | date_to_string }}</span>
{% unless post.categories == empty %}
<div class="categories"><span>{{ post.categories | join: '</span><span>' }}</span></div>
{% endunless %}
{{ post.content | strip_html | truncatewords:30 }}
<a class="read-more" href="{{ post.url }}">Read more...</a>
</div>
{% endfor %}
</div>

<div class="pagination">
{% if site.next_page %}
<a class="pagination-item older" href="{{ site.baseurl }}page{{site.next_page}}">Older</a>
{% else %}
<span class="pagination-item older">Older</span>
{% endif %}
{% if site.previous_page %}
{% if site.page == 2 %}
<a class="pagination-item newer" href="{{ site.baseurl }}">Newer</a>
{% else %}
<a class="pagination-item newer" href="{{ site.baseurl }}page{{site.previous_page}}">Newer</a>
{% endif %}
{% else %}
<span class="pagination-item newer">Newer</span>
{% endif %}
</div>
