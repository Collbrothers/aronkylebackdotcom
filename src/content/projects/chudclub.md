---
title: "ChudClub"
description: "A joke site for roasting friends' Steam stats, built with unreasonably serious infrastructure: Cloudflare Workers, D1 etc"
stack: ["SvelteKit", "Cloudflare", "Workers", "D1", "OpenID"]
repository: "https://github.com/Collbrothers/chudclubnet"
website: "https://chudclub.net"
date: 2026-09-19
---

ChudClub is a club made for <abbr title="internet slang, roughly 'terminally online guy'">chuds</abbr>, by chuds.

It started as something me and my friends would add to our usernames across different games. That then led me to check how much the domain would cost, and like that I'm making the site at 3 AM on a weekend.

Visitors may choose to log in via steam, which automatically applies them to join the "club". Members with admin permissions may then visit the admin dashboard and accept them. What do they gain out of this? They get listed on the site!

The website contains knowingly obvious AI-generated text that has little to no meaning.

## Stack

SvelteKit on Cloudflare Workers, with Cloudflare D1 as the database (schema managed with Drizzle), and edge caching (currently disabled) to keep it fast.

## Auth & permissions

Login is handled via Steam OpenID, no separate account system. Once a member is accepted, they can edit a description shown on their profile page, and a quote shown via carousel on the homepage.

Sessions are handled with signed cookies backed by a `sessions` table in D1.

## Why over-engineer a joke site

Why not?

On a serious note; I wanted to get more experience with CF Workers & D1, and to be able to say that a joke site like this is more efficient than most websites on the web doesn't hurt...