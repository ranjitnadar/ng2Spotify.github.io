import { Component, OnInit } from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Artist} from '../Artist';
import {Album} from '../Album';

import {SpotifyService} from '../spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})

export class ArtistComponent implements OnInit {
	id: string;
	artist: Artist[];
	albums: Album[];
	constructor(private _spotifyService:SpotifyService, private _route:ActivatedRoute) {
			
	}

	ngOnInit() {
		this._route.params
			.map(params => params['id'])
			.subscribe((id) => {
				console.log(id);

				this._spotifyService.getArtist(id)
					.subscribe(artist => {
						this.artist = artist;
					})

				this._spotifyService.getAlbums(id)
					.subscribe(album => {
						//console.log(album);
						this.albums = album;
					})
			});
	}

}