---
title: "Bragi"
description: "A self-hosted, open-source Spotify alternative built for homelabs; Rust backend, SvelteKit frontend."
stack: ["Rust", "SvelteKit", "Self-hosted", "Axum", "PostgreSQL", "Apache OpenDAL", "Rayon"]
link: "https://github.com/bragilabs/bragi"
date: 2026-09-19
featured: true
---

Bragi is a self-hosted music streaming server; a Spotify alternative you run
on your own hardware. Backend in Rust, frontend in SvelteKit.

## Why

I needed a way to host my music on an SBC connected to my NAS, solutions like Plex, Jellyfin, Navidrome do exist, but are not as efficient performance-wise as I'd like them to be. The solution I came up with? Bragi.

## How it works

### Architecture

* API layer - Axum handles routing & auth, SeaORM maps to a normalized Postgres schema.
* Storage abstraction - Apache OpenDAL decouples the backend from where the tracks live. Local disk and S3-compatible object storage are interchangeable; tracks are referenced by UUID object key, not file path.
* Scanner - Parallel metadata extraction via Rayon and Lofty. Batches DB lookups (artist/album caching via HashMap) instead of running N+1 queries per track.
* Auth - Access + refresh token pattern.

### Key decisions

* Chose Rust & Axum over a framework with "batteries included" to force clean architecture, rather than inherit others opinions and issues that may follow.
* Storage abstraction was a fundamental part at the beginning, not something that was bolted on.

## What I'd do differently

* Proper test suite from day one - Having developed, and debugged Bragi, I see the appeal for proper tests more and more. Having them from day one would have eased the development immensely.