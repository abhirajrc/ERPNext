	po_value: function(frm) {
		if (frm.doc.discount1) {
			let p = (frm.doc.po_value * (1 - (0.01*frm.doc.discount1)));
			frm.set_value('amount_payable1', p);
			frm.refresh_field('amount_payable1');
			if (frm.doc.freight1) {
				let q = (p * (1 + (0.01*frm.doc.freight1)));
				frm.set_value('amount_payable1', q);
				frm.refresh_field('amount_payable1');
				if (frm.doc.p_and_f1) {
					let r = (p*0.01*frm.doc.p_and_f1);
					frm.set_value('amount_payable1', q+r);
					frm.refresh_field('amount_payable1');
				    if (frm.doc.gst1) {
						let s = ((q+r) * (1 + (0.01*parseFloat(frm.doc.gst1))))
					    frm.set_value('amount_payable1', s);
					    frm.refresh_field('amount_payable1');
				    }
				else if (frm.doc.gst1) {
					let r = (q * (1 + (0.01*parseFloat(frm.doc.gst1))))
					frm.set_value('amount_payable1', r);
					frm.refresh_field(amount_payable1);
					if(frm.doc.p_and_f1) {
						let s = (q * (1 + (0.01*(parseFloat(frm.doc.gst1)+frm.doc.p_and_f1))));
						frm.set_value('amount_payable1', s);
						frm.refresh_field(amount_payable1);
					}
				}
			    }
		    }
		}
